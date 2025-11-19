import React from 'react';
import config from '../config';

interface DigitalClockIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name DigitalClockIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/digital-clock)
 * @see {@link https://clicons.dev/icon/digital-clock}
 */
const DigitalClockIcon = React.forwardRef<SVGSVGElement, DigitalClockIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M5 19.0001V21.0001M19 19.0001V21.0001'
    }
  ],
  [
    'path',
    {
      d: 'M16 6H8C5.17157 6 3.75736 6 2.87868 6.87868C2 7.75736 2 9.17157 2 12V13C2 15.8284 2 17.2426 2.87868 18.1213C3.75736 19 5.17157 19 8 19H16C18.8284 19 20.2426 19 21.1213 18.1213C22 17.2426 22 15.8284 22 13V12C22 9.17157 22 7.75736 21.1213 6.87868C20.2426 6 18.8284 6 16 6Z'
    }
  ],
  [
    'path',
    {
      d: 'M7 6L7.0883 5.73509C7.52832 4.41505 7.74832 3.75503 8.2721 3.37752C8.79587 3 9.49159 3 10.883 3H13.117C14.5084 3 15.2041 3 15.7279 3.37752C16.2517 3.75503 16.4717 4.41505 16.9117 5.73509L17 6'
    }
  ],
  [
    'path',
    {
      d: 'M19 13.75V11.25C19 10.5597 18.4404 10 17.75 10C17.0596 10 16.5 10.5597 16.5 11.25V13.75C16.5 14.4404 17.0596 15 17.75 15C18.4404 15 19 14.4404 19 13.75Z'
    }
  ],
  [
    'path',
    {
      d: 'M13.5 13.75V11.25C13.5 10.5596 12.9404 10 12.25 10C11.5596 10 11 10.5596 11 11.25V13.75C11 14.4404 11.5596 15 12.25 15C12.9404 15 13.5 14.4403 13.5 13.75Z'
    }
  ],
  [
    'path',
    {
      d: 'M5 15V10'
    }
  ],
  [
    'path',
    {
      d: 'M7.99996 11H8.00894M7.99102 14H8'
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

DigitalClockIcon.displayName = 'DigitalClockIcon';
export default DigitalClockIcon;
