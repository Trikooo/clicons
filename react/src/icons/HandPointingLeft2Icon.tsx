import React from 'react';
import config from '../config';

interface HandPointingLeft2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name HandPointingLeft2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/hand-pointing-left2)
 * @see {@link https://clicons.dev/icon/hand-pointing-left2}
 */
const HandPointingLeft2Icon = React.forwardRef<SVGSVGElement, HandPointingLeft2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M14 7.41601L10.5 7.41601M10.5 7.41601L4.25 7.41601C3.2835 7.41601 2.5 8.19951 2.5 9.16601C2.5 10.1325 3.2835 10.916 4.25 10.916L9.5 10.916L9.97758 13.993C10.2669 15.9216 10.4115 16.886 10.8184 17.5652C11.4906 18.6872 12.5 19.5 13.9736 19.5C15 19.5 15.6886 19.2463 17.5387 18.6296C18.7127 18.2383 19.2996 18.0426 19.7643 17.7236C20.5293 17.1983 21.0878 16.4233 21.3442 15.5315C21.5 14.9898 21.5 14.3711 21.5 13.1336L21.5 11.7287C21.5 9.94422 21.5 9.05198 21.1651 8.28584C21.0137 7.9397 20.8141 7.61674 20.5722 7.32659C20.0367 6.68438 19.2387 6.28535 17.6426 5.48731C16.3483 4.84015 15.7011 4.51657 15.0302 4.50082C14.7276 4.49372 14.4256 4.53246 14.1346 4.61571C13.4894 4.80031 12.9448 5.27678 11.8558 6.2297L10.5 7.41601Z'
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

HandPointingLeft2Icon.displayName = 'HandPointingLeft2Icon';
export default HandPointingLeft2Icon;
