import React from 'react';
import config from '../config';

interface HandPointingLeft4IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name HandPointingLeft4Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/hand-pointing-left4)
 * @see {@link https://clicons.dev/icon/hand-pointing-left4}
 */
const HandPointingLeft4Icon = React.forwardRef<SVGSVGElement, HandPointingLeft4IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M10.515 10.7553L7.51076 10.7553M7.51076 10.7553H4.00456C3.17361 10.7553 2.5 10.083 2.5 9.25355C2.5 8.42415 3.17361 7.75178 4.00456 7.75178L9.469 7.75178M7.51076 10.7553L7.53762 11.8097C7.55574 12.5207 7.94402 13.1373 8.5156 13.4776M9.469 7.75178L14.0319 7.75178M9.469 7.75178L12.2288 5.15834C14.0964 3.58588 15.4578 4.4122 16.2142 4.99245L18.6516 6.60732C20.7191 7.83214 21.5 9.2495 21.5 10.4418V15.3225C21.5 17.5886 19.1177 19.7016 16.9342 19.7016L11.7343 19.7497C10.7241 19.759 9.865 19.0163 9.73 18.017L9.54069 16.4766M10.5448 13.7589H9.54069C9.16648 13.7589 8.81576 13.6563 8.5156 13.4776M8.5156 13.4776L8.5703 14.8132C8.59792 15.8977 9.48658 16.7624 10.5734 16.7624H11.5774'
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

HandPointingLeft4Icon.displayName = 'HandPointingLeft4Icon';
export default HandPointingLeft4Icon;
