import React from 'react';
import config from '../config';

interface Yoga2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Yoga2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/yoga2)
 * @see {@link https://clicons.dev/icon/yoga2}
 */
const Yoga2Icon = React.forwardRef<SVGSVGElement, Yoga2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7.88598 10C8.57173 11.3968 9.30442 12.7049 9.1352 14.3142C8.86468 16.8869 5.74512 17.8552 3.75022 19.0404C2.44325 19.8169 2.9319 22 4.53582 22C6.48047 22 8.21607 21.8448 9.9706 21.0201L13.4111 18.9028C13.8887 18.6783 14.4913 18.774 15 19'
    }
  ],
  [
    'path',
    {
      d: 'M16.0105 10C15.3102 11.3968 14.562 12.7049 14.7348 14.3142C15.0111 16.8869 18.1967 17.8552 20.2339 19.0404C21.5685 19.8169 21.0695 22 19.4316 22C17.4458 22 15.6734 21.8448 13.8817 21.0201L10.3683 18.9028C9.95819 18.714 9.45777 18.7517 9 18.9028'
    }
  ],
  [
    'path',
    {
      d: 'M10 4C10 5.10457 10.8954 6 12 6C13.1046 6 14 5.10457 14 4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4Z'
    }
  ],
  [
    'path',
    {
      d: 'M3 16C5.44586 16 6.54368 13.2949 6.89335 11.4291C6.98463 10.9421 7.13246 10.4565 7.45625 10.0814C8.55651 8.80674 10.184 8 12 8C13.816 8 15.4435 8.80674 16.5437 10.0814C16.8675 10.4565 17.0154 10.9421 17.1067 11.4291C17.4563 13.2949 18.5541 16 21 16'
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
        if (!processedAttrs.strokeLinejoin) processedAttrs.strokeLinejoin = 'round';
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

Yoga2Icon.displayName = 'Yoga2Icon';
export default Yoga2Icon;
