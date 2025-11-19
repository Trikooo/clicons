import React from 'react';
import config from '../config';

interface HandPointingDown2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name HandPointingDown2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/hand-pointing-down2)
 * @see {@link https://clicons.dev/icon/hand-pointing-down2}
 */
const HandPointingDown2Icon = React.forwardRef<SVGSVGElement, HandPointingDown2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7.41601 10L7.41601 13.5M7.41601 13.5V19.75C7.41601 20.7165 8.19951 21.5 9.16601 21.5C10.1325 21.5 10.916 20.7165 10.916 19.75V14.5L13.993 14.0224C15.9216 13.7331 16.886 13.5885 17.5652 13.1816C18.6872 12.5094 19.5 11.5 19.5 10.0264C19.5 9 19.2463 8.3114 18.6296 6.46127C18.2383 5.28733 18.0426 4.70036 17.7236 4.23571C17.1983 3.47073 16.4233 2.9122 15.5315 2.65576C14.9898 2.5 14.3711 2.5 13.1336 2.5H11.7287C9.94422 2.5 9.05198 2.5 8.28584 2.83495C7.9397 2.98627 7.61674 3.18587 7.32659 3.42779C6.68438 3.96326 6.28536 4.7613 5.48731 6.35738C4.84015 7.65171 4.51657 8.29887 4.50083 8.96984C4.49373 9.27244 4.53246 9.57436 4.61571 9.86537C4.80031 10.5106 5.27678 11.0552 6.2297 12.1442L7.41601 13.5Z'
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

HandPointingDown2Icon.displayName = 'HandPointingDown2Icon';
export default HandPointingDown2Icon;
