import React from 'react';
import config from '../config';

interface Bug2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Bug2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/bug2)
 * @see {@link https://clicons.dev/icon/bug2}
 */
const Bug2Icon = React.forwardRef<SVGSVGElement, Bug2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M3.01206 6.59744C2.89214 7.65674 3.6584 10.1951 5.87693 10.255'
    }
  ],
  [
    'path',
    {
      d: 'M18.2891 10.195C19.3684 10.255 20.9873 8.99582 20.9873 6.59741'
    }
  ],
  [
    'path',
    {
      d: 'M20.0876 20.9879C20.1476 19.6088 19.2482 17.4742 17.5093 17.4142'
    }
  ],
  [
    'path',
    {
      d: 'M3.90138 20.9881C3.84009 19.5998 4.7594 17.4509 6.53675 17.3905'
    }
  ],
  [
    'path',
    {
      d: 'M3.01227 13.7926H5.21757'
    }
  ],
  [
    'path',
    {
      d: 'M21 13.7926L18.8282 13.7926'
    }
  ],
  [
    'path',
    {
      d: 'M11.9932 13.7926V10.8546M16.4902 2.99982L14.6914 4.79862M7.49615 2.99982L9.29496 4.79862'
    }
  ],
  [
    'path',
    {
      d: 'M6.95612 8.61209C8.57504 9.77532 12.5924 11.4542 16.9695 8.68404'
    }
  ],
  [
    'path',
    {
      d: 'M16.826 7.6767C13.2523 2.7 8.69536 5.09841 7.07644 7.8206C6.02093 9.59542 4.37823 13.8886 7.49616 18.5655C10.8539 22.6667 14.8113 20.808 16.4302 18.6494C17.9892 16.7906 19.5242 11.9938 16.826 7.6767Z'
    }
  ]
];

    const renderElement = (item: any, index: number): React.ReactElement => {
      const tag = item[0];
      const attrs = item[1];
      const children = item[2];
      const Element = tag as any;

      const processedAttrs: any = { ...attrs };

      // Apply color and stroke properties to shape elements
      const isShapeElement = ['path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse'].includes(tag);

      if (isShapeElement) {
        if (!processedAttrs.stroke) processedAttrs.stroke = finalColor;
        if (!processedAttrs.fill) processedAttrs.fill = 'none';

        if (!processedAttrs.strokeWidth) {
          processedAttrs.strokeWidth = finalAbsoluteStrokeWidth
            ? finalStrokeWidth
            : finalStrokeWidth * (finalSize / 24);
        }
        if (!processedAttrs.strokeLinecap) processedAttrs.strokeLinecap = 'round';
      }

      // Handle nested elements
      if (children) {
        if (Array.isArray(children)) {
          return <Element key={index} {...processedAttrs}>{children.map(renderElement)}</Element>;
        } else if (typeof children === 'string') {
          return <Element key={index} {...processedAttrs}>{children}</Element>;
        }
      }

      return <Element key={index} {...processedAttrs} />;
    };

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={finalSize}
        height={finalSize}
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        {...rest}
      >
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

Bug2Icon.displayName = 'Bug2Icon';
export default Bug2Icon;
