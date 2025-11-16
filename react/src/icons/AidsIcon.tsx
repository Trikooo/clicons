import React from 'react';
import config from '../config';

interface AidsIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name AidsIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/aids)
 * @see {@link https://clicons.dev/icon/aids}
 */
const AidsIcon = React.forwardRef<SVGSVGElement, AidsIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 2C9.92705 2 6.88247 2.5672 6.29 4.89186C5.7657 6.94903 5.88763 8.4198 7.1936 10.1667L14.8875 20.4583C15.6615 21.4936 16.0486 22.0113 16.5727 21.9998C17.0969 21.9883 17.4599 21.4542 18.186 20.3859L18.7147 19.608C19.6223 18.2725 20.0762 17.6047 19.9895 16.883C19.9029 16.1613 19.3034 15.6152 18.1043 14.523L6.79911 4'
    }
  ],
  [
    'path',
    {
      d: 'M12 2C14.0729 2 17.1175 2.5672 17.71 4.89186C18.2343 6.94903 18.1124 8.4198 16.8064 10.1667L15.4358 12M17.2009 4L12 8.84105M12 16.5959L9.11248 20.4583C8.33845 21.4936 7.95143 22.0113 7.42726 21.9998C6.90309 21.9883 6.54007 21.4542 5.81402 20.3859L5.28533 19.608C4.37768 18.2725 3.92383 17.6047 4.01046 16.883C4.09709 16.1613 4.69663 15.6152 5.89571 14.523L8.60624 12'
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

AidsIcon.displayName = 'AidsIcon';
export default AidsIcon;
